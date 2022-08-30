import React, { useMemo, useEffect, useState } from "react";
import InputOverlay from "../input-overlay";

const UploadFileInput = (props) => {
  const {
    uploaderTitle = `Выберите или перетащите файлы`,
    multiple = false,
    onChange,
    id,
    files = {},
    setFiles,
    error,
    accept = `*/*`,
    BeforeUploadFileIcon,
    DeleteFileIcon,
    FileIcon,
    BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL ||
      "http://localhost:1337",
  } = props;

  // console.log(`🚀 ~ UploadFileInput ~ files`, files);
  // console.log(`🚀 ~ UploadFileInput ~ defaultValue`, defaultValue);

  // useEffect(() => {
  //   console.log(`🚀 ~ UploadFileInput ~ files`, files);
  // }, [files]);
  // useEffect(() => {
  //   console.log(`🚀 ~ useEffect ~ error`, error);
  // }, [error]);

  // const [error, setError] = useState(null);

  const handleUploadImage = (e) => {
    preventDefaultEvent(e);

    // setError(null);

    // if (files?.length >= 4) return setError({ message: `Maximum files: 4` });

    // let file;

    // if (e?.dataTransfer) {
    //   file = e.dataTransfer.files[0];
    // } else {
    //   file = e.target.files[0];
    // }

    // console.log(`🚀 ~ handleUploadImage ~ file`, file);
    e.target.multiple = multiple;
    onChange(e);
    // if (file) {
    //   const sizeInMB = file?.size / (1024 * 1024);

    //   if (sizeInMB > 2.3) return setError({ message: `File too large` });

    //   // setFiles([...files, file]);
    //   onChange(e);
    // }
  };

  const handleDelete = (e, params) => {
    setFiles((prev) => {
      const newFiles = { ...prev };
      let toDeleteFile;
      if (multiple) {
        toDeleteFile = newFiles[params.id][params.index];
      } else {
        toDeleteFile = newFiles[params.id];
      }
      if (toDeleteFile?.url) {
        // console.log(`🚀 ~ setFiles ~ toDeleteFile`, toDeleteFile);
        // deleteFile({ id: toDeleteFile.id });
      }

      if (multiple) {
        newFiles[params.id] = newFiles[params.id].filter(
          (file, index) => index !== params.index
        );
      } else {
        delete newFiles[params.id];
      }

      // console.log(`🚀 ~ setFiles ~ newFiles`, newFiles);
      return newFiles;
    });

    // console.log(`🚀 ~ handleDelete ~ e`, e, deleteFile);
  };

  return (
    <InputOverlay {...props} error={error}>
      {files[id] && !multiple ? null : (
        <div
          className="relative w-[160px] h-[130px] flex flex-col items-center justify-center rounded-8px border-[2px] border-dashed border-primary-700 duration-200 bg-primary-200 hover:bg-primary hover:bg-opacity-50 text-center flex-shrink-0"
          onDrop={handleUploadImage}
          onDragOver={preventDefaultEvent}
          onDragEnter={preventDefaultEvent}
        >
          <label
            htmlFor={id}
            className="absolute w-full h-full z-90 cursor-pointer flex flex-col items-center justify-center p-3"
          >
            {multiple ? (
              <input
                type="file"
                // name="file"
                id={id}
                accept={accept}
                onChange={handleUploadImage}
                className="hidden"
                multiple
              />
            ) : (
              <input
                type="file"
                // name="file"
                id={id}
                accept={accept}
                onChange={handleUploadImage}
                className="hidden"
              />
            )}

            {typeof BeforeUploadFileIcon === "function" ? (
              <BeforeUploadFileIcon />
            ) : null}
            {uploaderTitle ? (
              <p className="mb-1 !font-medium !text-black">{uploaderTitle}</p>
            ) : null}
          </label>
        </div>
      )}

      <FilesRow
        handleDelete={(e, params) => handleDelete(e, { ...params, id })}
        files={files[id]}
        multiple={multiple}
        DeleteFileIcon={DeleteFileIcon}
        FileIcon={FileIcon}
        BACKEND_URL={BACKEND_URL}
      />
    </InputOverlay>
  );
};

const FilesRow = ({
  files,
  multiple,
  handleDelete = () => {},
  DeleteFileIcon,
  FileIcon,
}) => {
  // console.log(`🚀 ~ FilesRow ~ files`, files);
  const localFiles = useMemo(() => {
    if (!files) {
      return;
    }
    if (multiple) {
      return files;
    } else {
      return [files];
    }
  }, [files]);

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {localFiles?.length > 0
        ? localFiles?.map((file, index) => {
            return (
              <FileCard
                handleDelete={(e) => handleDelete(e, { index })}
                key={index}
                file={file}
                DeleteFileIcon={DeleteFileIcon}
                FileIcon={FileIcon}
                BACKEND_URL={BACKEND_URL}
              />
            );
          })
        : null}
    </div>
  );
};

const FileCard = ({
  file,
  handleDelete = () => {},
  BACKEND_URL,
  DeleteFileIcon,
  FileIcon,
}) => {
  const src = useMemo(() => {
    if (file.url) {
      return `${BACKEND_URL}${file.url}`;
    }
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div className="relative w-[160px] h-[130px] flex flex-col items-center justify-center rounded-8px border-[2px] border-primary duration-200 text-center overflow-hidden">
      {file?.type?.includes(`image/`) || file?.mime?.includes(`image/`) ? (
        <img
          src={src}
          className="w-full h-full absolute inset-0 object-cover opacity-80"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          {typeof FileIcon === "function" ? <FileIcon /> : null}
          <p className="text-black">{getShortFileName(file.name)}</p>
        </div>
      )}
      <div className="w-full h-full absolute flex items-center justify-center inset-0 bg-primary-900/30 opacity-0 hover:opacity-100 duration-200">
        <button onClick={handleDelete}>
          {typeof DeleteFileIcon === "function" ? <DeleteFileIcon /> : null}
        </button>
      </div>
    </div>
  );
};

const preventDefaultEvent = (e) => e.preventDefault();

const extensionReg = /(?:\.([^.]+))?$/;

const getShortFileName = (string) => {
  if (string?.length > 15) {
    const currentExtension = extensionReg.exec(string)[1];
    const nameWithoutExtension = string.replace(currentExtension, ``);
    return nameWithoutExtension.substring(0, 15) + `...` + currentExtension;
  }

  return string;
};

export default UploadFileInput;

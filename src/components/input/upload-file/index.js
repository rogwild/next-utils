import React, { useMemo, useEffect, useState } from "react";
import useStyleRewriter from "../../../hooks/use-style-rewriter";
import InputOverlay from "../input-overlay";

const UploadFileInput = (props) => {
  const {
    uploadTitle = `Click here to upload a file`,
    uploadTitleClassName,
    multiple = false,
    onChange,
    id,
    files = {},
    setFiles,
    error,
    accept = `*/*`,
    DeleteFileButton,
    inputClassName,
    containerClassName,
    BACKEND_URL = "",
    fileCardClassName,
    FileComponent,
    InnerComponent,
    fileCardImageClassName,
    deleteFileButtonCointainerClassName,
  } = props;

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

  const srInputClassName = useStyleRewriter(baseInputClassName, inputClassName);
  const srInputContainerClassName = useStyleRewriter(
    baseInputContainerClassName,
    containerClassName
  );

  return (
    <InputOverlay {...props} error={error}>
      <div className={srInputContainerClassName}>
        {files[id] && !multiple ? null : (
          <label
            htmlFor={id}
            className={srInputClassName}
            onDrop={handleUploadImage}
            onDragOver={preventDefaultEvent}
            onDragEnter={preventDefaultEvent}
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

            {typeof InnerComponent === "function" ? (
              <InnerComponent {...props} />
            ) : uploadTitle ? (
              <p className={uploadTitleClassName}>{uploadTitle}</p>
            ) : null}
          </label>
        )}

        <FilesRow
          handleDelete={(e, params) => handleDelete(e, { ...params, id })}
          files={files[id]}
          multiple={multiple}
          DeleteFileButton={DeleteFileButton}
          fileCardClassName={fileCardClassName}
          fileCardImageClassName={fileCardImageClassName}
          deleteFileButtonCointainerClassName={
            deleteFileButtonCointainerClassName
          }
          FileComponent={FileComponent}
          BACKEND_URL={BACKEND_URL}
        />
      </div>
    </InputOverlay>
  );
};

const FilesRow = ({
  files,
  multiple,
  handleDelete = () => {},
  DeleteFileButton,
  fileCardClassName,
  fileCardImageClassName,
  deleteFileButtonCointainerClassName,
  FileComponent,
  BACKEND_URL,
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

  return localFiles?.length > 0
    ? localFiles?.map((file, index) => {
        return (
          <FileCard
            handleDelete={(e) => handleDelete(e, { index })}
            key={index}
            file={file}
            fileCardClassName={fileCardClassName}
            DeleteFileButton={DeleteFileButton}
            fileCardImageClassName={fileCardImageClassName}
            deleteFileButtonCointainerClassName={
              deleteFileButtonCointainerClassName
            }
            FileComponent={FileComponent}
            BACKEND_URL={BACKEND_URL}
          />
        );
      })
    : null;
};

const FileCard = ({
  file,
  handleDelete = () => {},
  BACKEND_URL,
  DeleteFileButton,
  fileCardClassName,
  fileCardImageClassName,
  deleteFileButtonCointainerClassName,
  FileComponent,
}) => {
  const src = useMemo(() => {
    if (file.url) {
      return `${BACKEND_URL}${file.url}`;
    }
    return URL.createObjectURL(file);
  }, [file]);

  const srFileCardClassName = useStyleRewriter(
    baseFileCardClassName,
    fileCardClassName
  );

  const srFileCardImageClassName = useStyleRewriter(
    baseFileCardImageClassName,
    fileCardImageClassName
  );

  const srDeleteFileButtonCointainerClassName = useStyleRewriter(
    baseDeleteFileButtonCointainerClassName,
    deleteFileButtonCointainerClassName
  );

  return (
    <div className={srFileCardClassName}>
      {file?.type?.includes(`image/`) || file?.mime?.includes(`image/`) ? (
        <img src={src} className={srFileCardImageClassName} />
      ) : typeof FileComponent === "function" ? (
        <FileComponent file={file} />
      ) : null}
      <div className={srDeleteFileButtonCointainerClassName}>
        {typeof DeleteFileButton === "function" ? (
          <DeleteFileButton onClick={handleDelete} />
        ) : null}
      </div>
    </div>
  );
};

const preventDefaultEvent = (e) => e.preventDefault();

export default UploadFileInput;

const baseInputContainerClassName = `
  @dy flex
  @fxw flex-wrap
  @wh w-full
`;

const baseInputClassName = `
  @cr cursor-pointer
  @pn relative
  @tndn duration-200
`;

const baseFileCardClassName = `
  @pn relative
  @tndn duration-200
  @ow overflow-hidden
`;

const baseFileCardImageClassName = `
  @wh w-full
  @ht h-full
  @pn absolute
  @it inset-0
  @otf object-cover
`;

const baseDeleteFileButtonCointainerClassName = `
  @wh w-full
  @ht h-full
  @pn absolute
  @dy flex
  @ani items-center
  @jyc justify-center
  @it inset-0 
  @oy opacity-0 hover:opacity-100
  @tndn duration-200
`;

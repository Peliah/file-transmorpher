"use client"



import { FiUploadCloud } from "react-icons/fi";
import { LuFileSymlink } from "react-icons/lu";
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
import ReactDropzone from 'react-dropzone';
import type { Action } from "@/type";

const Dropzone = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [files, setFiles] = useState<Array<any>>([]);
    const [actions, setActions] = useState<Action[]>([]);

    const accepted_files = {
        "image/*": [
            ".jpg",
            ".jpeg",
            ".png",
            ".gif",
            ".bmp",
            ".webp",
            ".ico",
            ".tif",
            ".tiff",
            ".raw",
            ".tga",
        ],
        "audio/*": [],
        "video/*": [],
    };


    const handleDrop = (acceptedFiles: Array<any>, rejectedFiles: Array<any>) => {
        setIsHover(false);
        setFiles(acceptedFiles);

        if (rejectedFiles.length > 0) {
            toast({
                variant: 'destructive',
                title: 'Error Uploading file(s)',
                description: 'Allowed files: Audio, Video and Images.',
                duration: 3000
            });
        }

        const tmp: Action[] = [];
        acceptedFiles.forEach((file: any) => {
            const formData = new FormData();
            tmp.push({
                file_name: file.name,
                file_size: file.size,
                from: file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2),
                to: null,
                file_type: file.type,
                file,
                is_converted: false,
                is_converting: false,
                is_error: false,
            });
        });
        setActions(tmp);
    };

    const handleDragEnter = () => setIsHover(true);
    const handleDragLeave = () => setIsHover(false);

    return (
        <ReactDropzone
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            accept={accepted_files}
        >
            {({ getRootProps, getInputProps }) => (
                <div
                    {...getRootProps()}
                    className='bg-gray-50  h-96 lg:h-96 xl:h-96 rounded-3xl shadow-sm border-2 border-dashed cursor-pointer flex items-center justify-center'
                >
                    <input {...getInputProps()} />
                    <div>
                        {isHover ? (
                            <>
                                <div className="justify-center flex text-8xl">
                                    <LuFileSymlink className="text-gray-400" />
                                </div>
                                <h3 className="text-center font-medium text-2xl text-gray-400">
                                    Yes, right there
                                </h3>
                            </>
                        ) : (
                            <>
                                <div className="justify-center flex text-8xl">
                                    <FiUploadCloud className="text-gray-400" />
                                </div>
                                <h3 className="text-center font-medium text-2xl text-gray-400">
                                    Click, or drop your files here
                                </h3>
                            </>
                        )}
                    </div>
                </div>
            )}
        </ReactDropzone>
    );
};

export default Dropzone;

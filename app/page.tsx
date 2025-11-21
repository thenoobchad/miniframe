"use client";

import { Pickaxe, PieChartIcon, Upload } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";



export default function Home() {
	const [imageFile, setImageFile] = useState<File | null>(null); 
	const [preview, setPreview] = useState<string >(""); 
	const onDrop = useCallback((acceptedFiles: File[]) => {
		 
		setImageFile(acceptedFiles[0]);
		if (imageFile) {
			const objectUrl = URL.createObjectURL(imageFile);
			setPreview(objectUrl);
		}
	 }, [imageFile]);
	
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	
  return (
		<main className="flex flex-col max-w-5xl mx-auto p-4 items-center">
			<h1 className="text-2xl font-semibold my-3">ROAST ME</h1>
			<p className="text-lg tracking-wide text-zinc-100 mb-5">
				Upload a selfie. Get destroyed.
			</p>

			<form action="" className="flex flex-col gap-4 w-full sm:max-w-md">
				<div className="flex flex-col bg-zinc-900 gap-4 p-3 rounded-lg">
					<div
						{...getRootProps()}
						className="border-2 border-dashed border-zinc-700 h-30 w-full  flex items-center justify-center rounded-lg text-center cursor-pointer">
						<input {...getInputProps()} />
						{isDragActive ? (
							<p>Drop the files here ...</p>
						) : (
							<p className="flex flex-col gap-4 items-center text-zinc-500">
								<Upload className="inline-block mr-2 text-center" size={50} />
								Click to upload image
							</p>
						)}
					</div>

					<label htmlFor="image" className="flex justify-between ">
						<div>🔥</div>
						<div className="underline italic text-sm">Upload Selfie</div>
					</label>
				</div>

				<button className="bg-white text-zinc-800 py-3 font-semibold mt-4 rounded-full  flex items-center w-fit px-8 justify-center gap-2">
					ROAST ME
				</button>
			</form>
		</main>
	);
}



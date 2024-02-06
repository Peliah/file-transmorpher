import Dropzone from "./_components/Dropzone";

const page = () => {
    return ( 
        <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-base md:text-base text-center md:px-24 xl:px-44 2xl:px-52">
        File Transmorpher empowers users to effortlessly convert images, audio and video, enhancing productivity 
        and streamlining workflows. Whether converting documents for professional 
        presentations, optimizing media files for online distribution, or ensuring 
        interoperability between software applications,<br/>
        File Transmorpher provides reliable and efficient file conversion solutions tailored to diverse user needs.
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
     );
}
 
export default page;
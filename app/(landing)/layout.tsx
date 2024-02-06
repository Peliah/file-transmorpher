import Navbar from "./_components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center">
            <Navbar/>
            <main className="pt-32  min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                {children}
            </main>
        </div>
    )
}

export default LandingLayout;
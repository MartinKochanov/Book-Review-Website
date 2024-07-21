const CenteredLayout = ({
    children
}) => {
    return (
        <div className=" text-white flex flex-col justify-center items-center h-[100vh]">
            {children}
        </div>
    )
}

export default CenteredLayout;
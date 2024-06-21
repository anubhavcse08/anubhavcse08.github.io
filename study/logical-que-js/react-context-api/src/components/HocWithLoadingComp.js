const HocWithLoadingComp = (Component) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return <h1>Loading...</h1>
        }
        return <Component {...props} />
    }
}

export default HocWithLoadingComp;

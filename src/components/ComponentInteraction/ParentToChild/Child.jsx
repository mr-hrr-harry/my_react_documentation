let ChildComponent = (props) => {
    return(
        <div className="">
            <p className="bg-warning text-black p-3 m-3 rounded" >I'm child Component!</p>
            <p style={props.styleComp}> {"=>"} {props.childData} with Parent Comp styles </p>                       {/* Parent Styles */}
        </div>
    )
}

 export default ChildComponent
import "../style/tabs.css";

export const Tabs = () =>{
    return(
        <>
            <div className="tabHeader">
                <p> Pauleena Phan's Portfolio Site </p>
                <div className="headerIcons">
                    <p> - </p>
                    <p> box </p>
                    <p> X </p>
                </div>
            </div>
            <nav>
                <div className="navTab">
                    <button> Home </button>
                    <p> x </p>
                </div>
                <div className="navTab">
                    <button> About </button>
                    <p> x </p>
                </div>
                <div className="navTab">
                    <button> Projects </button>
                    <p> x </p>
                </div>
                <div className="navTab">
                    <button> Skills </button>
                    <p> x </p>
                </div>
                <div className="navTab">
                    <button> Contact </button>
                    <p> x </p>
                </div>
            </nav>
        </>
    )
}

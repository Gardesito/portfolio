import { WavyLink } from "../library/waves";

const Wrapper = () => <>
    <div className="flex justify-center items-center  h-screen">
        <WavyLink direction="up" to="/contact" color="#8f44fd">
            <button>
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor">
                    </path></svg>
                <span>Portfolio</span>
            </button>
        </WavyLink>
    </div>
    {/* <div className="flex justify-center items-center  h-screen	">
        <div className="loader">
            <WavyLink direction="up" to="/" color="#8f44fd">
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </WavyLink>

        </div>

        <div className="loader triangle">
            <WavyLink direction="up" to="/about" color="#8f44fd">
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </WavyLink>

        </div>

        <div className="loader">
            <WavyLink direction="up" to="/contact" color="#8f44fd">

                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </WavyLink>
        </div>
    </div> */}
</>;

export default Wrapper;

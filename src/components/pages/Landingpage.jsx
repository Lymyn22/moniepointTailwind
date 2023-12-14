import Header from '../shared/Header'
import video from '../asset/videos/hero-video.mp4'
import logo from '../asset/images/download-tag.png'

const LandingPage = ()=>{
    return (
      <div>
        <Header />
        <section id="backgroundvid">
          <div className="myvideo">
            <video
              autoPlay
              loop
              muted
              play-inline
              src={video}
              type="video/mp4"
              className="backvideo"
            >
              <source />
            </video>
          </div>  

          <div className="pt-[10rem] space-y-10 w-[40 rem]">
            <span className="w-[30rem] flex items-center bg-white rounded-md border">
                <img
                    src={logo}
                    alt=""
                    className="w-[2rem] h-[2rem]"
                />
                <span className="text-[16px] text-[blue]">
                    National Inclusive Payment Initiative Award by CBN
                </span>
            </span>
            <div>
              <h1 className='font-bold text-white text-[3rem]'>Simple solutions to power your business</h1>
            </div>
            <p className="para">
              Collect payments, access loans and manage operations with a
              business banking solution that meets all your needs.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              id="button"
            >
              <span>Open an account</span>
              <span> &#x2192</span>
            </button>
          </div>
        </section>
      </div>
    );
}

export default LandingPage
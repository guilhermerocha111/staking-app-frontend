import loaderGif from '../static/preloader.gif';
  
export default function Loader({width = '16px'}) {
    
    return (
        <div style={{width: width, height: width, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={loaderGif} />
        </div>
    )
}
  
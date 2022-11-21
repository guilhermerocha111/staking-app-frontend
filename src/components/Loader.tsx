import loaderGif from '../static/preloader.gif';
  
export default function Loader() {
    
    return (
        <div style={{width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={loaderGif} />
        </div>
    )
}
  
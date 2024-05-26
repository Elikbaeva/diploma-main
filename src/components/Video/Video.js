import video from '../Video/video.mp4';
import './Video.css';

export default function Video() {
  return (
    <div className="video">
      <video autoPlay muted loop controls>
        <source src={video} type="video/mp4" />
        Ваш браузер не поддерживает элемент <code>video</code>.
      </video>
    </div>
  );
}

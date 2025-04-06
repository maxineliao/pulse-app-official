import {
  Shuffle,
  SkipBack,
  Play,
  Repeat,
  ListMusic,
  Volume2,
  SkipForward,
  Pause,
  Repeat1,
} from "lucide-react";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useSpotifyPlayer } from "../../hooks/useSpotifyPlayer";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

export default function PlayerComp() {
  const {
    togglePlay,
    skipToNext,
    skipToPrev,
    toggleShuffle,
    volumeControl,
    setRepeatMode,
  } = useSpotifyPlayer();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const isShuffled = useSelector((state) => state.player.shuffle);
  const currentTrack = useSelector((state) => state.player.trackName);
  const currentContext = useSelector((state) => state.player.currentContext);
  const originalVolume = useSelector((state) => state.player.volume);
  const repeatMode = useSelector((state) => state.player.repeatState);
  const currentArtist = useSelector((state) => state.player.artists);
  const currentArtistUri = useSelector((state) => state.player.artistUri);

  const trackInfoRef = useRef(null);
  const playerRef = useRef(null);
  const trackTitleRef = useRef(null);
  const [scrollTrackTitle, setScrollTrackTitle] = useState(false);
  const trackArtistRef = useRef(null);
  const [scrollArtistTitle, setScrollArtistTitle] = useState(false);

  const contextRoute = useMemo(() => {
    if (currentContext) {
      const parts = currentContext.split(":");
      if (parts.length >= 3) {
        const routeType = parts[1];
        const routeId = parts[2];

        if (routeType === "album") {
          return `/player/albumTrack_detail?id=${routeId}`;
        } else if (routeType === "playlist") {
          return `/player/playlist/${routeId}`;
        }
      }
    }

    if (currentArtistUri && currentArtist) {
      const id = currentArtistUri.split(":")[2];
      const artistName = currentArtist.includes(",")
        ? currentArtist.split(",")[0]
        : currentArtist;

      return `/player/artist_detail?id=${id}&name=${encodeURIComponent(
        artistName
      )}`;
    }

    return "#";
  }, [currentContext, currentArtistUri, currentArtist]);

  useEffect(() => {
    if (currentTrack && trackArtistRef.current && trackTitleRef.current) {
      setScrollArtistTitle(
        trackArtistRef.current.scrollWidth >
          trackInfoRef.current.clientWidth - 90
      );
      setScrollTrackTitle(
        trackTitleRef.current.scrollWidth >
          trackInfoRef.current.clientWidth - 90
      );
      // console.log(trackArtistRef.current.clientWidth);
      // console.log((trackInfoRef.current.clientWidth));
    }
  }, [currentTrack]);

  //音量控制
  const useDebounce = (func, delay) => {
    const timerRef = useRef(null);

    return useCallback(
      (...args) => {
        //清除舊的計時器
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        //設置新的計時器
        timerRef.current = setTimeout(() => func(...args), delay);
      },
      [func, delay]
    );
  };
  const handleVolumeChange = (e) => {
    debouncedVolumeControl(e.target.value);
  };
  const debouncedVolumeControl = useDebounce((volume) => {
    volumeControl(volume);
  }, 300);
  // useEffect(() => {
  // 	initializePlayer();
  // }, []);
  return (
    <div
      className="player-comp fixed-bottom"
      ref={playerRef}
      style={
        currentTrack
          ? {
              transition: "transform ease 300ms",
            }
          : {
              transition: "transform ease 300ms",
              transform: "translateY(100%)",
            }
      }
    >
      <div className="d-flex justify-content-between py-2 px-3 px-lg-6">
        <div
          ref={trackInfoRef}
          className="trackInfo d-flex align-items-center overflow-x-hidden"
        >
          <img
            src={useSelector((state) => state.player.image)}
            alt="music"
            width="64"
            height="64"
          />

          <div className="mx-5">
            <Marquee
              speed={30}
              play={scrollTrackTitle}
              key={scrollTrackTitle ? "scrollingTitle" : "staticTitle"}
            >
              <h5 ref={trackTitleRef}>
                {useSelector((state) => state.player.trackName)}
              </h5>
            </Marquee>
            <Marquee
              speed={30}
              play={scrollArtistTitle}
              key={scrollArtistTitle ? "scrolling" : "static"}
            >
              <h6 ref={trackArtistRef} className="text-secondary text-nowrap">
                {useSelector((state) => state.player.artists)}
              </h6>
            </Marquee>
          </div>
          {/* <button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<SquarePlus />
					</button> */}
        </div>
        <div className="player-control d-flex align-items-center">
          <button
            type="button"
            className={
              isShuffled
                ? "btn player-icon-btn d-lg-block d-none text-primary-yellow"
                : "btn player-icon-btn d-lg-block d-none"
            }
            onClick={toggleShuffle}
          >
            <Shuffle />
          </button>
          <button
            type="button"
            className="btn player-icon-btn d-lg-block d-none"
            onClick={skipToPrev}
          >
            <SkipBack />
          </button>
          <button
            type="button"
            className="btn player-icon-btn player-footer-btn-circle player-bg rounded-circle p-3"
            onClick={() => {
              togglePlay();
            }}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button
            type="button"
            className="btn player-icon-btn"
            onClick={skipToNext}
          >
            <SkipForward />
          </button>
          <button
            type="button"
            className="btn player-icon-btn d-lg-block d-none"
            onClick={setRepeatMode}
          >
            {repeatMode === "context" ? (
              <Repeat />
            ) : repeatMode === "track" ? (
              <Repeat1 />
            ) : (
              <Repeat className="text-secondary" />
            )}
          </button>
        </div>
        <div className="d-lg-flex align-items-center d-none">
          {/* <button type="button" className="btn player-icon-btn">
						<MicVocal />
					</button> */}

          <Link type="button" className="btn player-icon-btn" to={contextRoute}>
            <ListMusic />
          </Link>
          <Volume2 className="me-1" />
          <div className="accent-color">
            <input
              type="range"
              id="range"
              min="0"
              max="100"
              defaultValue={originalVolume}
              onChange={handleVolumeChange}
            />
          </div>
          {/* <button type="button" className="btn player-icon-btn">
						<Maximize2 />
					</button> */}
        </div>
      </div>
    </div>
  );
}

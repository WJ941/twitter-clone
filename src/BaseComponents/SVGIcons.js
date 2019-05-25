import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const SvgWrapper = styled.span`
  display: inline-flex;
  font-size: 14px;
  height: ${props => {
    if (props.xxsmall) return "1.1em";
    if (props.xsmall) return "1.25em";
    if (props.small) return "1.5em";
    if (props.middle) return "1.75em";
    if (props.large) return "2em";
    return "auto";
  }};
  color: ${props => {
    if (props.secondary) return "rgb(101, 119, 134)";
    if (props.primary) return "rgb(29, 161, 242)";
    if (props.white) return "rgb(255, 255, 255)";
    return "inherit";
  }};
`;
const Svg = styled.svg`
  fill: currentColor;
  vertical-align: text-bottom;
  color: inherit;
  height: 100%;
`;
const SvgLabel = styled.span`
  margin-left: 9px;
`;
export function HomeIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M22.58 7.35L12.475 1.897a1 1 0 0 0-.95 0L1.425 7.35A1.002 1.002 0 0 0 1.9 9.231c.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 0 0 .95-1.759zM12 15.435a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}
// search icon
export function ExploreIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66A8.98 8.98 0 0 0 20 11a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}
// clock icon
export function NotifyIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 0 0 .447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 0 0-.263-.838zM12 20.478a2.84 2.84 0 0 1-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}
// envelope icon
export function MessageIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M19.25 3.018H4.75A2.753 2.753 0 0 0 2 5.77v12.495a2.754 2.754 0 0 0 2.75 2.753h14.5A2.754 2.754 0 0 0 22 18.265V5.77a2.753 2.753 0 0 0-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 0 1-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 0 0 2.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

/**
 * navigator left
 * @param {object} props
 */
export function PrevIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M8.914 12l6.793-6.793a1 1 0 0 0-1.414-1.414l-7.5 7.5a1 1 0 0 0 0 1.414l7.5 7.5a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L8.914 12z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function NextIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M17.207 11.293l-7.5-7.5a1 1 0 0 0-1.414 1.414L15.086 12l-6.793 6.793a1 1 0 0 0 1.414 1.414l7.5-7.5a1 1 0 0 0 0-1.414z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

// delete icon with filled circle
export function FilledDeleteIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.855 13.545a.749.749 0 1 1-1.06 1.06L12 13.062l-2.795 2.796a.748.748 0 0 1-1.06 0 .749.749 0 0 1 0-1.06L10.94 12 8.144 9.205a.749.749 0 1 1 1.06-1.06L12 10.938l2.795-2.796a.749.749 0 1 1 1.06 1.06L13.062 12l2.795 2.795z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function DeleteIcon({ onClick, ...otherProps }) {
  return (
    <SvgWrapper {...otherProps} onClick={onClick}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M13.414 12l5.793-5.793a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 0 0 1.414 1.414L12 13.414l5.793 5.793a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}
DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export function ReplyIcon({ value, ...otherProps }) {
  return (
    <SvgWrapper {...otherProps}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 0 0 .12.403.744.744 0 0 0 1.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 0 0-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
        </g>
      </Svg>
      {value && <SvgLabel>{value}</SvgLabel>}
    </SvgWrapper>
  );
}
ReplyIcon.propTypes = {
  value: PropTypes.number.isRequired
};

export function ForewardIcon({ value, ...otherProps }) {
  return (
    <SvgWrapper {...otherProps}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 0 0 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5z" />
        </g>
      </Svg>
      {value && <SvgLabel>{value}</SvgLabel>}
    </SvgWrapper>
  );
}
ForewardIcon.propTypes = {
  value: PropTypes.number.isRequired
};

export function LikeIcon({ value, ...otherProps }) {
  return (
    <SvgWrapper {...otherProps}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
        </g>
      </Svg>
      {value && <SvgLabel>{value}</SvgLabel>}
    </SvgWrapper>
  );
}
LikeIcon.propTypes = {
  value: PropTypes.number.isRequired
};

export function ShareIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M17.53 7.47l-5-5a.749.749 0 0 0-1.06 0l-5 5a.749.749 0 1 0 1.06 1.06l3.72-3.72V15a.75.75 0 0 0 1.5 0V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22a.749.749 0 0 0 0-1.06z" />
          <path d="M19.708 21.944H4.292A2.294 2.294 0 0 1 2 19.652V14a.75.75 0 0 1 1.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 0 0 .792-.792V14a.75.75 0 0 1 1.5 0v5.652a2.294 2.294 0 0 1-2.292 2.292z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function SettingIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z" />
          <path d="M12.36 22.375h-.722a2.26 2.26 0 0 1-2.262-2.064l-.014-.147a.77.77 0 0 0-.472-.644.763.763 0 0 0-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51a2.262 2.262 0 0 1-.14-3.06l.098-.118a.768.768 0 0 0 .122-.787.768.768 0 0 0-.646-.48l-.15-.014a2.26 2.26 0 0 1-2.067-2.262v-.722a2.26 2.26 0 0 1 2.064-2.262l.156-.014a.777.777 0 0 0 .522-1.268l-.094-.116a2.261 2.261 0 0 1 .137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122a.769.769 0 0 0 .477-.643l.014-.153a2.26 2.26 0 0 1 2.262-2.066h.722a2.26 2.26 0 0 1 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118a.758.758 0 0 0-.123.788c.112.27.36.45.646.478l.152.014a2.26 2.26 0 0 1 2.067 2.262v.723a2.26 2.26 0 0 1-2.064 2.262l-.155.014a.763.763 0 0 0-.64.47.77.77 0 0 0 .117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096a.78.78 0 0 0-.79-.122.772.772 0 0 0-.48.646l-.014.15a2.26 2.26 0 0 1-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175a2.27 2.27 0 0 1 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148a2.266 2.266 0 0 1 1.392-1.892 2.283 2.283 0 0 1 2.333.35l.113.094a.764.764 0 0 0 1.039-.047l.51-.51a.766.766 0 0 0 .048-1.038l-.1-.12a2.262 2.262 0 0 1-.352-2.323 2.263 2.263 0 0 1 1.894-1.397l.155-.014a.77.77 0 0 0 .7-.77v-.722a.77.77 0 0 0-.702-.768l-.152-.014a2.268 2.268 0 0 1-1.895-1.393 2.263 2.263 0 0 1 .353-2.327l.1-.118a.769.769 0 0 0-.048-1.04l-.51-.51a.764.764 0 0 0-1.038-.047l-.12.1a2.31 2.31 0 0 1-2.322.354 2.268 2.268 0 0 1-1.397-1.896l-.014-.155a.766.766 0 0 0-.767-.7h-.723a.77.77 0 0 0-.768.702l-.014.152a2.264 2.264 0 0 1-1.39 1.893 2.286 2.286 0 0 1-2.33-.35l-.118-.096a.767.767 0 0 0-1.041.046l-.512.51a.768.768 0 0 0-.046 1.038l.1.118c.54.653.677 1.544.352 2.325a2.268 2.268 0 0 1-1.895 1.397l-.156.014a.77.77 0 0 0-.7.77v.722c0 .4.303.73.702.768l.15.014a2.268 2.268 0 0 1 1.897 1.396c.325.786.19 1.675-.353 2.325l-.096.115a.765.765 0 0 0 .046 1.04l.51.51a.764.764 0 0 0 1.038.047l.116-.096a2.288 2.288 0 0 1 1.453-.524z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function RelateIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M23.152 3.483h-2.675V.81a.75.75 0 1 0-1.5 0v2.674H16.3a.75.75 0 0 0 0 1.5h2.677V7.66a.75.75 0 0 0 1.5 0V4.982h2.675a.75.75 0 0 0 0-1.5zM8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.646-4.513S4.15 3.342 3.77 6.168c-.27 2.025-.007 3.462.807 4.393.968 1.108 2.485 1.257 3.84 1.257zm-3.16-5.448c.16-1.2.786-3.212 3.16-3.212 2.373 0 2.998 2.013 3.16 3.212.207 1.55.056 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.256-.223-2.71-.743c-.507-.578-.658-1.656-.45-3.205zm11.44 12.867c-.88-3.525-4.283-5.988-8.28-5.988-3.998 0-7.403 2.463-8.28 5.988-.172.693-.03 1.4.395 1.94.408.522 1.04.822 1.733.822H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.247.396-1.942zm-1.577 1.018c-.126.16-.316.245-.55.245H2.264c-.235 0-.426-.085-.552-.246a.753.753 0 0 1-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.113 1.994 6.824 4.85c.06.24.017.48-.12.655z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function BackIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M20 11H7.414l4.293-4.293a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H20a1 1 0 1 0 0-2z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function BigVIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24" aria-label="大V">
        <g>
          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25a3.606 3.606 0 0 0-1.336-.25c-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5a.749.749 0 0 1-1.041.208l-.115-.094-2.415-2.415a.749.749 0 1 1 1.06-1.06l1.77 1.767 3.825-5.74a.75.75 0 0 1 1.25.833z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function PullDownIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg aria-label="下拉刷新" viewBox="0 0 30 72">
        <g>
          <path d="M28.414 38.586a2.001 2.001 0 0 0-2.828 0L17 47.172V22c0-1.106-.894-2-2-2s-2 .894-2 2v25.172l-8.586-8.586a2 2 0 1 0-2.828 2.828l12 12c.39.39.9.586 1.414.586s1.024-.196 1.414-.586l12-12c.78-.78.78-2.046 0-2.828z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function Person(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246a.753.753 0 0 1-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function List(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5a.75.75 0 0 0-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H4.25z" />
          <path d="M17 8.64H7a.75.75 0 0 1 0-1.5h10a.75.75 0 1 1 0 1.5zm0 4.11H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5zm-5 4.11H7a.75.75 0 1 1 0-1.5h5a.75.75 0 0 1 0 1.5z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function BookMark(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M19.9 23.5a.755.755 0 0 1-.442-.144L12 17.928l-7.458 5.43a.75.75 0 0 1-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 0 1-.75.75zM12 16.25a.74.74 0 0 1 .44.144l6.71 4.883V5.6a.752.752 0 0 0-.75-.75H5.6a.752.752 0 0 0-.75.75v15.677l6.71-4.883a.74.74 0 0 1 .44-.144z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function Momments(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M8.98 22.698a.745.745 0 0 1-.742-.857l1.228-8.527H6.542a.748.748 0 0 1-.74-.876L7.49 2.5a.751.751 0 0 1 .74-.625h6.81a.75.75 0 0 1 .73.925l-1.446 6.075H19a.75.75 0 0 1 .582 1.224L9.562 22.42a.748.748 0 0 1-.583.276zM7.43 11.812h2.903a.748.748 0 0 1 .742.858l-.966 6.7 7.313-8.995h-4.05a.75.75 0 0 1-.728-.925l1.446-6.075H8.864L7.43 11.812z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const WattingIconWrapper = styled(SvgWrapper)`
  font-size: 14px;
  display: flex;
  animation-name: ${rotate};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  width: 2em;
  margin: auto;
`;
export function WattingIcon(props) {
  return (
    <WattingIconWrapper {...props}>
      <Svg viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: "rgb(29, 161, 242)", opacity: 0.2 }}
        />
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: "rgb(29, 161, 242)",
            strokeDasharray: 80,
            strokedashoffset: 60
          }}
        />
      </Svg>
    </WattingIconWrapper>
  );
}

export function PurpleStar(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path
            fill="#794BC4"
            d="M22.99 11.295l-6.986-2.13-.877-.326-.325-.88L12.67.975a.72.72 0 0 0-1.376 0l-2.392 7.84-1.774.657-6.148 1.82a.72.72 0 0 0 0 1.38l7.956 2.358 2.356 7.956a.719.719 0 1 0 1.38.001l1.822-6.15.656-1.773 7.84-2.392a.72.72 0 0 0 0-1.375z"
          />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function ArrowDown(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M20.207 8.147a1 1 0 0 0-1.414 0L12 14.94 5.207 8.147a1 1 0 0 0-1.414 1.414l7.5 7.5a.996.996 0 0 0 1.414.001l7.5-7.5a1 1 0 0 0 0-1.413z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function ArrowRight(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M17.207 11.293l-7.5-7.5a1 1 0 0 0-1.414 1.414L15.086 12l-6.793 6.793a1 1 0 0 0 1.414 1.414l7.5-7.5a1 1 0 0 0 0-1.414z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function CheckedIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M9 20a.995.995 0 0 1-.707-.293l-4.785-4.785a1 1 0 0 1 1.414-1.414l3.946 3.945L18.075 4.41a1 1 0 1 1 1.635 1.154L9.817 19.577A1.003 1.003 0 0 1 9 20z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function LocationIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z" />
          <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69a8.62 8.62 0 0 0 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912a.743.743 0 0 0 .93.001c.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002a8.62 8.62 0 0 0 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285a7.12 7.12 0 0 1-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function BirthdayIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M7.75 11.083a.75.75 0 0 1-.75-.75C7 7.393 9.243 5 12 5a.75.75 0 0 1 0 1.5c-1.93 0-3.5 1.72-3.5 3.833a.75.75 0 0 1-.75.75z" />
          <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83a.496.496 0 0 0-.093.54c.08.182.26.3.46.3h4.957a.499.499 0 0 0 .365-.84l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}

export function CalendarIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg viewBox="0 0 24 24">
        <g>
          <path d="M19.708 2H4.292A2.294 2.294 0 0 0 2 4.292v15.416A2.294 2.294 0 0 0 4.292 22h15.416A2.294 2.294 0 0 0 22 19.708V4.292A2.294 2.294 0 0 0 19.708 2zm.792 17.708a.793.793 0 0 1-.792.792H4.292a.793.793 0 0 1-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z" />
          <circle cx="7.032" cy="8.75" r="1.285" />
          <circle cx="7.032" cy="13.156" r="1.285" />
          <circle cx="16.968" cy="8.75" r="1.285" />
          <circle cx="16.968" cy="13.156" r="1.285" />
          <circle cx="12" cy="8.75" r="1.285" />
          <circle cx="12" cy="13.156" r="1.285" />
          <circle cx="7.032" cy="17.486" r="1.285" />
          <circle cx="12" cy="17.486" r="1.285" />
        </g>
      </Svg>
    </SvgWrapper>
  );
}
export function TwitterIcon(props) {
  return (
    <SvgWrapper {...props}>
      <Svg
        viewBox="0 0 1208 982"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>bird</title>
        <desc>Created with Sketch.</desc>
        <g id="Final-Horizon">
          <g
            id="Artboard"
            transform="translate(-286.000000, -117.000000)"
            fillRule="nonzero"
            fill="#1B95E0"
          >
            <path
              d="M1493.75308,233.195911 C1449.31783,252.922544 1401.56126,266.207828 1351.43951,272.19627 C1402.61804,241.549536 1441.92034,192.987798 1460.3889,135.116296 C1412.53168,163.498493 1359.49119,184.130942 1303.02874,195.252335 C1257.88897,147.093181 1193.42514,117 1122.16771,117 C962.190754,117 844.636121,266.258151 880.768067,421.202806 C674.896491,410.886582 492.324484,312.253414 370.089808,162.341063 C305.17308,273.705962 336.423691,419.391176 446.731805,493.16476 C406.171431,491.856361 367.925917,480.734968 334.561738,462.165765 C331.844294,576.95263 414.122472,684.342008 533.287442,708.245454 C498.413572,717.706186 460.218381,719.9204 421.368991,712.47259 C452.871217,810.904465 544.358512,882.514158 652.854997,884.52708 C548.686294,966.201382 417.443793,1002.68559 286,987.186091 C395.653915,1057.48739 525.940278,1098.50067 665.838342,1098.50067 C1125.89162,1098.50067 1385.81015,709.956437 1370.10936,361.469352 C1418.52012,326.494836 1460.53987,282.864756 1493.75308,233.195911 Z"
              id="bird"
            />
          </g>
        </g>
      </Svg>
    </SvgWrapper>
  );
}

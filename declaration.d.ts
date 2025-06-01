// app/P2mobile/app/declarations.d.ts

declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.jpeg' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.gif' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.bmp' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.tiff' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

// Se você estiver importando arquivos de áudio, adicione-os também
declare module '*.mp3' {
  const value: number;
  export default value;
}
declare module '*.wav' {
  const value: number;
  export default value;
}
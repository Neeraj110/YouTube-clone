export const api = "AIzaSyAOc7rxmt8LSown2OC6gIsq0_J1I-g3kdM";
//export const api = "AIzaSyDlPhWa7Sw2aI7MvtCApGI8zmJ7AT2Re4M";


export const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    }
    if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };
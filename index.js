class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    str = string.replace(/[^a-z0-9áéíóúñü \.,_]/gim,"");
    return str.trim();
  }
}
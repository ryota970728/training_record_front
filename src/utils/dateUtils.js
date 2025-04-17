/**
 * 日付文字列から曜日を取得します。
 * @param {string} dateString - 'YYYY-MM-DD' 形式の日付文字列
 * @returns {string} 曜日（"日", "月", ..., "土"）
 */
export function getDayOfWeek(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = date.getDay();
  return dayOfWeekStr[dayOfWeek];
}
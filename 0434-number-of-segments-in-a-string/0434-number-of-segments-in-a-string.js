function countSegments(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
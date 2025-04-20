function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  const p2w = new Map();
  const w2p = new Map();
  return pattern.split('').every((p, i) => {
    const w = words[i];
    if (!p2w.has(p) && !w2p.has(w)) {
      p2w.set(p, w);
      w2p.set(w, p);
      return true;
    }
    return p2w.get(p) === w && w2p.get(w) === p;
  });
}

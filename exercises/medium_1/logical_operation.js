console.log(
(false && undefined),
// short-circuits, return false
(false || undefined),
// first operand is false, so returns second operand => undefined
((false && undefined) || (false || undefined)),
// first outer operand returns false
// so returns second outer operand, which returns undefined
((false || undefined) || (false && undefined)),
// first outer operand returns undefined, which evaluates to false
// so returns second outer operand, which short-circuits to false
((false && undefined) && (false || undefined)),
// first outer operand returns false,
// whole expression short-circuits and returns false
((false || undefined) && (false && undefined)),
// first outer operand returns undefined, which evaluates to false
// whole expression short-circuits and returns undefined
('a' || (false && undefined) || ''),
// first operand evaluates true, expression short-circuits and returns 'a'
((false && undefined) || 'a' || ''),
// first operand returns false, returns the rest
// the rest returns 'a'
('a' && (false || undefined) && ''),
// first operand evaluates true
// second operand returns undefined, which evaluates to false
// therefore, expression short-circuits here and returns undefined
((false || undefined) && 'a' && ''),
// first operand returns undefined, which evaluates to false
// whole expression short-circuits and returns undefined
);
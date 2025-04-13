class Solution {

    function oddString($words) {
        $diffs = [];
        foreach ($words as $word) {
            $diff = [];
            for ($i = 1; $i < strlen($word); $i++) {
                $diff[] = ord($word[$i]) - ord($word[$i - 1]);
            }
            $diffs[] = $diff;
        }

        $counts = [];
        for ($i = 0; $i < count($diffs); $i++) {
            $diffStr = implode(',', $diffs[$i]);
            if (!isset($counts[$diffStr])) {
                $counts[$diffStr] = [];
            }
            $counts[$diffStr][] = $i;
        }

        foreach ($counts as $diffStr => $indices) {
            if (count($indices) === 1) {
                return $words[$indices[0]];
            }
        }

        return "";
    }
}

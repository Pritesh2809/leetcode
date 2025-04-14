class Solution {

    function nearestValidPoint($x, $y, $points) {
        $minDistance = PHP_INT_MAX;
        $nearestIndex = -1;

        for ($i = 0; $i < count($points); $i++) {
            $px = $points[$i][0];
            $py = $points[$i][1];

            if ($px === $x || $py === $y) {
                $distance = abs($x - $px) + abs($y - $py);
                if ($distance < $minDistance) {
                    $minDistance = $distance;
                    $nearestIndex = $i;
                }
            }
        }

        return $nearestIndex;
    }
}

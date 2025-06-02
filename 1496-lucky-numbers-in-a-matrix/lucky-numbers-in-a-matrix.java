class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        
        List<Integer> luckyNumbers = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            int rowMin = matrix[i][0];
            int colIndex = 0;
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] < rowMin) {
                    rowMin = matrix[i][j];
                    colIndex = j;
                }
            }
            
            boolean isLucky = true;
            for (int k = 0; k < m; k++) {
                if (matrix[k][colIndex] > rowMin) {
                    isLucky = false;
                    break;
                }
            }
            
            if (isLucky) {
                luckyNumbers.add(rowMin);
            }
        }
        return luckyNumbers;
    }
}

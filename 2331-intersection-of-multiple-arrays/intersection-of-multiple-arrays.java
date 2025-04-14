import java.util.*;

class Solution {
    public List<Integer> intersection(int[][] nums) {
        List<Integer> result = new ArrayList<>();
        int[] count = new int[1001]; 
        
    
        for (int[] arr : nums) {
            Set<Integer> uniqueSet = new HashSet<>(); 
            for (int num : arr) {
                uniqueSet.add(num);
            }
            for (int num : uniqueSet) {
                count[num]++;
            }
        }
        
      
        for (int i = 0; i < count.length; i++) {
            if (count[i] == nums.length) {
                result.add(i);
            }
        }
        
        return result;
    }
}
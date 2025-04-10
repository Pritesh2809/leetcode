public class Solution {
    public static String sortString(String s) {
        int[] freq = new int[26];
        
        for (char c : s.toCharArray()) {
            if (c == 'a') freq[0]++;
            else if (c == 'b') freq[1]++;
            else if (c == 'c') freq[2]++;
            else if (c == 'd') freq[3]++;
            else freq[c - 'a']++; 
        }

        StringBuilder res = new StringBuilder();
        while (res.length() < s.length()) {
      
            for (int i = 0; i < 26; i++) {
                if (freq[i] > 0) {
                    freq[i]--; 
                    res.append((char)(i + 'a'));
                }
            }
            
         
            for (int i = 25; i >= 0; i--) {
                if (freq[i] > 0) {
                    freq[i]--; 
                    res.append((char)(i + 'a'));
                }
            }
        }
        
        String finalResult = res.toString().trim(); 
        return finalResult;
    }
}
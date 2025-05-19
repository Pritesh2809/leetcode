/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int result;
        int ans = 0;
        string str = "";
        while (head != NULL) {
            str.push_back(head->val + '0');
            head = head->next;
        }
        int j = 0;
        for (int i = str.length() - 1; i >= 0; i--) {
            result = str[i] - '0';
            if (result == 1) {
                ans = ans + pow(2, j);
            }
            j++;
        }
        return ans;
    }
};
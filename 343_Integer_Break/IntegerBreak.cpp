#include<iostream>
#include<cmath>

using namespace std;

class Solution {
public:
    int integerBreak(int n) {
        int res[] = {0,0,1,2,4};
        const int MAX_VALUE = 4;
        if(n <= MAX_VALUE) {
            return res[n];
        }
        else {
            int n2 = 0, n3 = 0, rest3 = 0;
            n3 = int(n/3);
            rest3 = n - 3 * n3;
            if(rest3 == 1 && n3 > 1) {
                n3--;
                n2 += 2;
            }
            else {
                n2 = int(rest3/2);
            }
            int ans = pow(3, n3) * pow(2, n2);
            return ans;
        }
    }
};

int main() {
    int n = 2;
    int ans = 1;
    Solution solution;
    char flag = 'Y';
    while(flag == 'Y' || flag == 'y') {
        cout << "请输入n值：" << endl;
        cin >> n;
        ans = solution.integerBreak(n);
        cout << "结果为：" << ans << endl << "是否继续？(Y/N)" << endl;
        cin >> flag;
    }
    return 0;
}

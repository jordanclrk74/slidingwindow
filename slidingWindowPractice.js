// Problem 1 //

    function minSubarraySum(arr,n,k)
    {
        if (!arr.length) return false;
        if (k > arr.legnth) return false;
    
        let minSum = 0;

        for (let i=0; i<k; i++)
        minSum += arr[i];
    
        let currSum = minSum;

        for (let i=k; i<n; i++)
        {
            currSum += arr[i] - arr[i-k];
            minSum = Math.min(res, currSum);
        }
    
        return minSum;
    }

// Problem 2 //

    const longestSubstringInString = (str) => {
        if (!str.length) return false;

        let start = 0;
        let end = 0;
        let maximumLength = 0;

        const uniqueChars = new Set();
    
        while (end < str.length) {
            if (!uniqueChars.has(str[end])) {
                uniqueChars.add(str[end]);
                end++;
                maximumLength = Math.max(maximumLength, uniqueChars.size);
            } else {
                uniqueChars.delete(str[start]);
                start++;
            }
        }
        return maxLength;
    };
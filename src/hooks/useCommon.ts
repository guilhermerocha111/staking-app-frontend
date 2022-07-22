const useCommon = () => {

    const addCommasToNumber = (num: number, fixed: number|null = null) => {
      if (typeof num === "number") {
          const value = fixed ? +num?.toFixed(fixed) : +num
          return new Intl.NumberFormat('en-US').format(value)
      }
      return 0
    }


    return { addCommasToNumber };
};

export default useCommon;
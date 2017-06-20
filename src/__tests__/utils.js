import calculateTimeSeries from '../utils/calculateTimeSeries';


describe('Calculate time series function', () => {
  it('should return array of time series', () => {
    expect(calculateTimeSeries(20, 10)).toEqual([
      {
        name: 0,
        left: 20
      },
      {
        name: 1,
        left: 10
      },
      {
        name: 2,
        left: 0
      },
    ]);
  
    expect(calculateTimeSeries(30, 19)).toEqual([
      {
        name: 0,
        left: 30
      },
      {
        name: 1,
        left: 11
      },
      {
        name: 2,
        left: 0
      },
    ]);
  });

  it('should return empty array if any of args === 0', () => {
    expect(calculateTimeSeries(0, 10)).toEqual([]);
    expect(calculateTimeSeries(10, 0)).toEqual([]);
  })

  it('should return empty array if second arg > first arg', () => {
    expect(calculateTimeSeries(5, 10)).toEqual([]);
  })
})
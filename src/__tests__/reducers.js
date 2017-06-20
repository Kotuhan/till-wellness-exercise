import reducer from '../reducers/accounts'

describe('accounts reducer', () => {

  it('should handle addAccount', () => {
    expect(
      reducer([], {
        type: 'addAccount',
        balance: '321'
      })
    )
    .toEqual([{ balance: '321' }])

    expect(
      reducer([{ balance: '321' }],
        {
          type: 'addAccount',
          balance: '123'
        }
    ))
    .toEqual([{ balance: '321' }, { balance: '123' }])
  })
})
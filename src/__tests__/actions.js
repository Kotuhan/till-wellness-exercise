import * as actions from '../actions/accounts'

describe('actions', () => {
  it('should create an action to add an account', () => {
    const balance = '123'
    const expectedAction = {
      type: 'addAccount',
      balance
    }

    expect(actions.addAccount(balance)).toEqual(expectedAction)
  })
})
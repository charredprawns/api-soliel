const { handleError } = require('utils')

describe('utils:handleError', () => {
  it('should return response without res', () => {
    const response = handleError('Bad')
    expect(response.status).toBe('error')
  })

  it('should set correct status', () => {
    const res = {
      status: jest.fn().mockImplementation(code => ({
        json: jest.fn()
      }))
    }
    handleError('error', 'desc', 404, res)
    expect(res.status).toHaveBeenCalledTimes(1)
  })

  it('should format correct response', () => {
    const response = handleError('one', 'two')
    expect(response.description).toBe('two')
  })
})

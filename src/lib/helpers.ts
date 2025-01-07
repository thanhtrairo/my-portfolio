const TIME_STARTED_PROGRAMMING = '05/01/2022'

export const calculateYearsOfExperience = (startTime: string = TIME_STARTED_PROGRAMMING) => {
  const start = new Date(startTime)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()

  if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) {
    years--
  }

  return years > 0 ? `${years}+ years` : 'Under 1 year'
}

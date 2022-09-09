import axios from 'axios'

const mobileFriendlyTest = async (url, apiKey) => {
  console.log('Mobile Friendly Test: Start (This might take a minute or two)');

  try {
    const response = await axios.post(`https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=${apiKey}`,
      {
        url
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );

    console.log(response.data.testStatus.status === 'MOBILE_FRIENDLY' ? '\nMobile Friendly Test: Mobile Friendly' : '\nMobile Friendly Test: Not Mobile Friendly');

    const issues = response.data.mobileFriendlyIssues
    if (issues) {
      console.log('Issues', issues)
    }

  } catch (error) {
    console.log('\nMobile Friendly Test: Error');
  }
}

export default mobileFriendlyTest
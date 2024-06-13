import axios from 'axios'
import { Github } from 'lucide-react'
import React from 'react'

async function GitHubAppbar() {
    const res = await axios.get('https://api.github.com/repos/punyakrit/social-share')
    const data = res.data
    return (
    <div className='flex items-end'>
      <Github/>
      {data.watchers}
    </div>
  )
}

export default GitHubAppbar

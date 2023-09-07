import { CakeView } from '../features/cake/cake.view'
import { IcecreamView } from '../features/icecream/icecream.view'
import { UserView } from '../features/user/user.view'

import './app.css'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
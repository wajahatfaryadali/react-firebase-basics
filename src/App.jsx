import { useEffect, useState } from 'react'
import './App.css'
import { firebaseCreateUser, firebaseSignIn, firebaseSignOut, firebaseSignUpWithGoogle, getBooksCollection } from './firebase/auth'

function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [newForm, setNewForm] = useState({
    email: '',
    password: '',
  })
  const handleSignUp = () => {
    if (form.email && form.password) {
      firebaseCreateUser(form.email, form.password)
    } else {
      console.log('duck duck duzzz ', form)
    }
  }

  const handleSignIn = () => {
    if (form.email && form.password) {
      firebaseSignIn(form.email, form.password)
    } else {
      console.log('duck duck duzzz ', form)
    }
  }

  const [booksList, setBooksList] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getBooksCollection()
      setBooksList(data)
    }

    getData()
  }, [])

  return (
    <>
      <div>
        sign in
        <br />
        <input type="email" name="email" id="new-email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" name="password" id="new-password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input type="button" value="sign in" onClick={handleSignIn} />
        <br />
        <br />
        sign up
        <br />
        <input type="email" name="email" id="email" autoComplete='off' value={newForm.email} onChange={(e) => setNewForm({ ...newForm, email: e.target.value })} />
        <input type="password" name="password" id="password" autoComplete='off' value={newForm.password} onChange={(e) => setNewForm({ ...newForm, password: e.target.value })} />
        <input type="button" value="sign up" onClick={handleSignUp} />
        <br />
        <br />
        <button type="" onClick={() => firebaseSignOut()}>signout</button>
        <br />
        <br />
        <button type="" onClick={() => firebaseSignUpWithGoogle()}>sign up with google</button>
        <br />
        <br />
        <button type="" onClick={() => console.log("sign in")}>sign in with google</button>
        <br />
        <br />
        <div>

          {booksList.map((e, i) => (<div key={i} style={{ border: '1px solid white', textAlign: 'left', padding: '12px 24px', marginBottom: '24px' }}>
            <div>
              Title: {e.title}
            </div>
            <div>
              Autor: {e.author}
            </div>
            <div>
              Pages: {e.pages}
            </div>
            <div>
              Price: {e.price}
            </div>
            <div>
              Available: {e.isAvailable ? "Yes" : "no"}
            </div>
          </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App

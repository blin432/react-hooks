import React, { Fragment, useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { signup } from "app/utils"
import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"
// import SignupForm from "./SignupForm.final"
// export default SignupForm

function TextInput({ id, label, type = "text" }) {
  return (
    <Fragment>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <input id={id} placeholder={label} type={type} required />
    </Fragment>
  )
}

export default function SignupForm() {
  return <form className="SignupForm">
  
  <TextInput id="displayName" label="Display Name" />
      <TextInput id="photoURL" label="Avatar URL" />
      <TextInput id="email" label="Email" />
      <TextInput id="password" label="Password" />
      <DateFields value={new Date()}>
          <MonthField aria-label="Start Month" /> /{" "}
          <DayField aria-label="Start Day" /> /{" "}
          <YearField start={2018} end={2019} aria-label="Start year" />
      </DateFields>
      <TabsButton>
        <FaDumbbell />
        <span>Sign Up</span>
      </TabsButton>
  
  </form>
}

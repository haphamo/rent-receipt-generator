import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { allTenants } from '../fixture/fixture.js';
import CreateProfile from "./CreateProfile.js";

function CreateTenant() {
  return(
    <h2>Create New Tenant Profile</h2>
  )
}

export default CreateProfile;
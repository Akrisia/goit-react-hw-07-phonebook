import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://62af7df7b0a980a2ef40e6a7.mockapi.io/api/contacts';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async () => {
        const {data} = await axios.get(`${BASE_URL}/contacts`);
        return data;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }) => {
        const duplicateData = await axios.get(`${BASE_URL}/contacts?search=${name}`);
        if (duplicateData.data.length > 0) {
            return alert(`${name} is already in contacts`);
        }

        const { data } = await axios.post(`${BASE_URL}/contacts`, { name, phone });
        return data;
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
        return data;
    }
);



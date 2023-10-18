import { getCity, getOTC, getRegions, putUserdata, getSchools, getNews, login, logout, refreshToken, register, getArticle, getDisciplines, getUser } from '@/services/AuthService';
import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';


export type Region = {
  number: number,
  name: string,
}

export type City = {
  id: number
  name: string,
  region: number,
}

export type School = {
    id: number;
    name: string;
    region: number;
};
export type TDiscipline = {
    id: number;
    name: string;
};

export interface IUser {
  id: number;
  subjects: string[];
  roles: string[];
  email: string;
  phoneNumber?: string;
  first_name: string | null;
  second_name: string | null;
  third_name: string | null;
  grade: number;
  SNILS: string;
  gender: null | 'm' | 'f';
  account_type: 's' | 't';
  data_of_birth: string;
  region: Region;
  city: City;
  school: School;
} 


type AuthState = {
    disciplines: TDiscipline[] | undefined;
    regions: Region[] | undefined;
    cities: City[] | undefined;
    schools: School[] | undefined;
    news: any[] | undefined;
    email: string | undefined;
    error: string | undefined;
    errorCode: string | undefined;
    code: number | undefined;
    password: string | undefined;
    user: IUser | undefined;
    loading: boolean;
    userdata: any[] | undefined;
    putuserdata: any[] | undefined;
};

const initialState = {
    email: undefined,
    error: undefined,
    errorCode: undefined,
    code: undefined,
    password: undefined,
    user: undefined,
    loading: false,
} as AuthState;

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    email: string | undefined;
    password: string | undefined;
    code: number | undefined;
}

export const setSelectedItem = createAction('auth/setSelectedItem');

export const GetOTC = createAsyncThunk(
    'auth/getRedemptionCode',
    async (data: ILoginData, { rejectWithValue }) => {
        return await getOTC(data.email, { rejectWithValue });
    },
);

export const Login = createAsyncThunk(
    'auth/loginByEmail',
    async (data: ILoginData, { rejectWithValue }) => {
        return await login(data, { rejectWithValue });
    },
);

export const Register = createAsyncThunk(
    'auth/registerByOTC',
    async (data: IRegisterData, { rejectWithValue }) => {
        return await register(data, { rejectWithValue });
    },
);
export const Logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    return await logout({ rejectWithValue });
});

export const RefreshToken = createAsyncThunk('auth/refreshToken', async (_, {rejectWithValue}) => {
  return await refreshToken({ rejectWithValue })
})

export const GetUser = createAsyncThunk(
  'auth/GetUser',
  async (_, { rejectWithValue }) => {
      return await getUser({ rejectWithValue });
  },
);

export const GetRegions = createAsyncThunk(
  'auth/GetRegions',
  async (_, { rejectWithValue }) => {
      return await getRegions({ rejectWithValue });
  },
);

export const GetDisciplines = createAsyncThunk(
  'auth/GetDisciplines',
  async (_, { rejectWithValue }) => {
      return await getDisciplines({ rejectWithValue });
  },
);

export const PutUserdata = createAsyncThunk(
  'auth/PutUserdata',
  async (data: any, { rejectWithValue }) => {
      return await putUserdata(data, { rejectWithValue });
  },
);

export const GetCity = createAsyncThunk(
  'auth/GetCity',
  async (region: string, { rejectWithValue }) => {
      return await getCity(region, { rejectWithValue });
  },
);

export const GetSchools = createAsyncThunk(
  'auth/GetSchools',
  async (city: string, { rejectWithValue }) => {
      return await getSchools(city, { rejectWithValue });
  },
);

export const GetNews = createAsyncThunk(
  'auth/GetNews',
  async (id: number, { rejectWithValue }) => {
      return await getNews(id, { rejectWithValue });
  },
);

export const GetArticle = createAsyncThunk(
  'auth/GetArticle',
  async (id: number, { rejectWithValue }) => {
      return await getArticle(id, { rejectWithValue });
  },
);


export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload
      },
      setSelectedItem: (state: any, action: any) => {
        state.selectedItem = action.payload;
      },
    },
    extraReducers: (builder) => {
        const clear = (state, loading) => {
          state.loading = loading
          state.error = undefined
          state.errorCode = undefined
        }
        const handleReject = (state, action) => {
          state.error = ((action.payload as AxiosError).response?.data as {detail: string})?.detail;
          state.errorCode = (action.payload as AxiosError).response?.status?.toString();
          state.loading = false
        };
        

        builder.addCase(GetOTC.pending, (state, action) => {
          clear(state, true)
          state.email = action.meta.arg.email;
          state.password = action.meta.arg.password;
        });
        builder.addCase(Login.pending, (state) => {
          clear(state, true)
        });
        builder.addCase(Register.pending, (state, action) => {
          clear(state, true)
          state.email = action.meta.arg.email;
        });
        builder.addCase(Logout.pending, (state) => {
          clear(state, true)
          state.user = undefined;
        });
        builder.addCase(RefreshToken.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetRegions.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetDisciplines.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetCity.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetSchools.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetNews.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetArticle.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(GetUser.pending, (state) => {
          clear(state, true)
        })
        builder.addCase(PutUserdata.pending, (state) => {
          clear(state, true)
        })

        builder.addCase(GetOTC.fulfilled, (state, action) => {
          clear(state, false)
          state.code = action.payload.data;
        });

        builder.addCase(Login.fulfilled, (state, action) => {
          clear(state, false)
          state.user = action.payload.data.user
        });

        builder.addCase(Register.fulfilled, (state) => {
          clear(state, false)
        });

        builder.addCase(Logout.fulfilled, (state) => {
          clear(state, false)
        });

        builder.addCase(RefreshToken.fulfilled, (state, action) => {
          clear(state, false)
          state.userdata = action.payload
        })
       

        builder.addCase(GetRegions.fulfilled, (state, action) => {
          state.regions = action.payload.data;
        })

        builder.addCase(GetCity.fulfilled, (state, action) => {
          state.cities = action.payload.data;
        })

        builder.addCase(GetSchools.fulfilled, (state, action) => {
          state.schools = action.payload.data;
        })

        builder.addCase(GetNews.fulfilled, (state, action) => {
          state.news = action.payload.data;
        })

        builder.addCase(GetArticle.fulfilled, (state, action) => {
          state.news = action.payload.data;
        })

        builder.addCase(GetUser.fulfilled, (state, action) => {
          state.userdata = action.payload.data;
        })

        builder.addCase(PutUserdata.fulfilled, (state, action) => {
          state.putuserdata = action.payload.data;
        })
        
        builder.addCase(GetDisciplines.fulfilled, (state, action) => {
          clear(state, false)
          state.disciplines = action.payload.data
        })

        builder.addCase(GetOTC.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Login.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Register.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(Logout.rejected, (state, action) => {
            handleReject(state, action);
        });
        builder.addCase(RefreshToken.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetRegions.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetDisciplines.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetCity.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetSchools.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetNews.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetArticle.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(GetUser.rejected, (state, action) => {
          handleReject(state, action)
        })
        builder.addCase(PutUserdata.rejected, (state, action) => {
          handleReject(state, action)
        })
    },
});

export const { setUser } = auth.actions;
export default auth.reducer;

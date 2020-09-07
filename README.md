# Nastha API


# Start 

```
  npm run dev
```

***

# USER

**POST DATA NILAI**
----
  Create json data about a data nilai.

* **URL**

  /datanilai

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    "MahasiswaId": required integer,
    "MataKuliahId": required integer,
    "nilai": required number,
    "keterangan": required string
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      "MahasiswaId": 3,
      "MataKuliahId": 2,
      "nilai": 80,
      "keterangan": "Good",
      "updatedAt": "2020-09-07T09:10:26.549Z",
      "createdAt": "2020-09-07T09:10:26.549Z"
    }

    ```
 
* **Error Response:**


  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```



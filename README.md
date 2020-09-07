# Nastha API


# Start 

```
  npm run dev
```

***

**POST DATA NILAI**
----
  Create json data about a data nilai.

* **URL**

  http://localhost:3000/datanilai

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

**PUT DATA NILAI**
----
  update a data nilai with id of data nilai about a data nilai.

* **URL**

  http://localhost:3000/datanilai/1

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**
 
   `id=[integer]`

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

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "data": [
          1,
          [
              {
                  "MahasiswaId": 3,
                  "MataKuliahId": 2,
                  "nilai": 50,
                  "keterangan": "Bad",
                  "createdAt": "2020-09-07T12:50:27.306Z",
                  "updatedAt": "2020-09-07T12:51:14.467Z"
              }
          ]
      ],
      "message": "Data berhasil di update"
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

**DELETE data nilai**
----
  Returns message that show deleted is successfully.


  http://localhost:3000/datanilai/1

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "message": "Data berhasil dihapus"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTENAL SERVER ERROR <br />
    **Content:** 
    ```
    { "msg" : "Internal Server Error" }
    ```

***

**GET DATA MAHASISWA**
----
  Returns json data object.

* **URL**

  http://localhost:3000/datanilai/1

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
        "IdMahasiswa": 3,
        "nama": "Rizki Septian",
        "mata_kuliah": "English",
        "nilai": 90
    }
    ```

* **Error Response:**

  * **Code:** 500 INTENAL SERVER ERROR <br />
    **Content:** 
    ```
    { "msg" : "Internal Server Error" }
    ```

***

**GET Nilai Rata-rata setiap Mahasiswa**
----
  Returns json data object.

* **URL**

  http://localhost:3000/average/1

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `idMahasiswa=[integer]`

* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
        "id_mahasiswa": "3",
        "nama": "Rizki Septian",
        "mata_kuliah_yg_diambil": [
            {
                "mata_kuliah": 2,
                "nilai": 90
            },
            {
                "mata_kuliah": 4,
                "nilai": 70
            }
        ],
        "nilai_average": 80
    }
    ```

* **Error Response:**

  * **Code:** 500 INTENAL SERVER ERROR <br />
    **Content:** 
    ```
    { "msg" : "Internal Server Error" }
    ```

**POST and PUT mahasiswa table with new data from csv file**
----
  Returns json data object.

* **URL**

  http://localhost:3000/mahasiswa/recovery

* **Method:**

  `GET`


* **Data Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
      "message": "recovery database is successfully"
    }
    ```

* **Error Response:**

  * **Code:** 500 INTENAL SERVER ERROR <br />
    **Content:** 
    ```
    { "msg" : "Internal Server Error" }
    ```
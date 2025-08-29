function splitJobCharacters(str) {
  if (!str) {
    return [];
  }
  const members = str.split(",");
  const result = [];
  for (let i = 0; i < members.length; i++) {
    result.push(members[i].split("-"));
  }
  return result;
}

function reverseJobCharacters(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const reversedJob = arr[i][1].split("").reverse().join("");
    result.push([name, reversedJob]);
  }
  return result;
}

function decryptJobCharacters(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const encryptedJob = arr[i][1];
    let decryptedJob = "";

    for (let j = 0; j < encryptedJob.length; j++) {
      const charCode = encryptedJob.charCodeAt(j);
      // Jika hurufnya 'a', putar balik ke 'z'
      if (encryptedJob[j] === "a") {
        decryptedJob += "z";
      } else {
        // Selain itu, geser mundur satu huruf
        decryptedJob += String.fromCharCode(charCode - 1);
      }
    }
    result.push([name, decryptedJob]);
  }
  return result;
}

function makingDreamTeam(arr) {
  return arr;
}

function startUpMatchMaking(str) {
  const splittedData = splitJobCharacters(str);
  const reversedData = reverseJobCharacters(splittedData);
  const decryptedData = decryptJobCharacters(reversedData);
  const dreamTeam = makingDreamTeam(decryptedData);

  // Cek jumlah anggota tim
  if (dreamTeam.length < 3) {
    return "Minimum 3 members in the team";
  }

  // Cek komposisi pekerjaan dalam tim
  let hustlerCount = 0;
  for (let i = 0; i < dreamTeam.length; i++) {
    if (dreamTeam[i][1] === "hustler") {
      hustlerCount++;
    }
  }

  // Aturan: Tim yang ideal harus memiliki tepat satu 'hustler'
  if (hustlerCount !== 1) {
    return "The job composition in the team is not suitable";
  }

  // Jika semua pengecekan lolos
  return "Match your Dream Start-Up Team";
}

console.log(startUpMatchMaking("idaz-sfmutvi,anggara-sfutqji,fika-sfldbi"));
// Match your Dream Start-Up Team

console.log(
  startUpMatchMaking(
    "eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji"
  )
);
// Match your Dream Start-Up Team

console.log(
  startUpMatchMaking(
    "abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi"
  )
);
// The job composition in the team is not suitable

console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji,eko-sfmutvi"));
// The job composition in the team is not suitable

console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji"));
// Minimum 3 members in the team

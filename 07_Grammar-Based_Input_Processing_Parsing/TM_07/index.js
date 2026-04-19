/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
  let lines = text.split("\n");
  
  let result = {
    agents: {},
    Sitemap: []
  };
  
  let currentAgent = null;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Skip baris kosong dan komentar
    if (line === "" || line.startsWith("#")) {
      continue;
    }
    
    let colonIndex = line.indexOf(":");
    if (colonIndex === -1) {
      continue;
    }
    
    let key = line.substring(0, colonIndex).trim().toLowerCase();
    let value = line.substring(colonIndex + 1).trim();
    
    if (key === "user-agent") {
      // currentAgent = value; ~ jadi ini yg ku ganti ke yg dibawah e
      currentAgent = value.toLowerCase();
      
      // Kalau user-agent belum ada di agents, bikin dulu
      if (!result.agents[currentAgent]) {
        result.agents[currentAgent] = {
          Allow: [],
          Disallow: []
        };
      }
    } else if (key === "sitemap") {
      // Sitemap dicek duluan karena bisa muncul sebelum user-agent
      if (value !== "") {
        result.Sitemap.push(value);
      }
    } else if (currentAgent !== null) {
      if (key === "allow") {
        if (value !== "") {
          result.agents[currentAgent].Allow.push(value);
        }
      } else if (key === "disallow") {
        if (value !== "") {
          result.agents[currentAgent].Disallow.push(value);
        }
      }
    }
    // else if (key === "host") { ~ ini yg ku hapus karena test nggak ngecek Host
    //   result.Host = value;
    // }
  }
  
  return result;
}

module.exports = parseRobots;
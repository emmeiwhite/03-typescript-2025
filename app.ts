// Unions
type UserRole = 'admin' | 'editor' | 'viewer'

let role: UserRole = 'editor'

function setRole() {
  if (role === 'admin') {
    return 'Admin Authenticated'
  } else if (role === 'editor') {
    return 'Editor Authenticated'
  } else {
    return 'Viewer Authenticated'
  }
}

setRole()

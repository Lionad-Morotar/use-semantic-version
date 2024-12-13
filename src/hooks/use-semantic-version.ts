import { ref, computed } from 'vue'

export const useSemanticVersion = (defaultValue = '0.0.1') => {

  const init = (defaultValue: string) => {
    const [major, minor, patch] = defaultValue.split('.').map(Number)
    return [ref(major), ref(minor), ref(patch)]
  }
  const [major, minor, patch] = init(defaultValue)

  const version = computed(() => `${major.value}.${minor.value}.${patch.value}`)

  const set = ({ _major, _minor, _patch }: { _major?: number, _minor?: number, _patch?: number }) => {
    _major && (major.value = _major)
    _minor && (minor.value = _minor)
    _patch && (patch.value = _patch)
  }

  const patching = () => patch.value++
  const minoring = () => minor.value++
  const majoring = () => major.value++


  const states = {
    major,
    minor,
    patch,
    version,
    set,
    patching,
    minoring,
    majoring,
  }

  return states
}

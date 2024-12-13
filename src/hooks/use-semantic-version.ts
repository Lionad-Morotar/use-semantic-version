import { ref, unref, computed } from 'vue'
import type { MaybeRef } from 'vue'

type CompareElement = { major: MaybeRef<number>, minor: MaybeRef<number>, patch: MaybeRef<number> } | string
type CompareFn = (x: Exclude<CompareElement, string>, y: Exclude<CompareElement, string>) => boolean

export const useSemanticVersion = (defaultValue = '0.0.1') => {

  const init = (defaultValue: CompareElement) => {
    if (typeof defaultValue !== 'string') return defaultValue

    const [major, minor, patch] = defaultValue.split('.').map(Number)
    if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
      throw new Error('Invalid Semantic Versioning')
    }
    return { major, minor, patch }
  }
  const temp = init(defaultValue)
  const [major, minor, patch] = [ref(temp.major), ref(temp.minor), ref(temp.patch)]

  const version = computed(() => `${major.value}.${minor.value}.${patch.value}`)

  const set = ({ _major, _minor, _patch }: { _major?: number, _minor?: number, _patch?: number }) => {
    _major && (major.value = _major)
    _minor && (minor.value = _minor)
    _patch && (patch.value = _patch)
  }

  const patching = () => patch.value++
  const minoring = () => minor.value++
  const majoring = () => major.value++

  const compare = (compareFn: CompareFn) => (x: Exclude<CompareElement, string>, y?: Exclude<CompareElement, string>) => {
    if (typeof x === 'string') x = init(x)
    if (typeof y === 'string') y = init(y)
    y = y || { major, minor, patch }
    if (!x || !y) throw new Error('Invalid Semantic Versioning')

    const [majorX, minorX, patchX] = [unref(x.major) || 0, unref(x.minor) || 0, unref(x.patch) || 0]
    const [majorY, minorY, patchY] = [unref(y.major) || 0, unref(y.minor) || 0, unref(y.patch) || 0]

    return compareFn({ major: majorX, minor: minorX, patch: patchX }, { major: majorY, minor: minorY, patch: patchY })
  }

  const isGreater = compare(({ major: x, minor: y, patch: z }, { major: a, minor: b, patch: c }) => x < a || (x === a && (y < b || (y === b && z < c))))
  const isSmaller = compare(({ major: x, minor: y, patch: z }, { major: a, minor: b, patch: c }) => x > a || (x === a && (y > b || (y === b && z > c))))
  const isEqual = compare(({ major: x, minor: y, patch: z }, { major: a, minor: b, patch: c }) => x === a && y === b && z === c)

  const compareTo = (x: CompareElement) => {
    const compareTo = computed(() => init(unref(x)))
    return computed(() => {
      console.log(compareTo.value, 'compareTo')
      if (isGreater(compareTo.value)) return '>'
      if (isSmaller(compareTo.value)) return '<'
      if (isEqual(compareTo.value)) return '='
      return '?'
    })
  }

  const states = {
    major,
    minor,
    patch,
    version,
    set,
    patching,
    minoring,
    majoring,
    isSmaller,
    isGreater,
    isEqual,
    compareTo,
  }

  return states
}
